﻿using Microsoft.AspNetCore.Html;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace JonathanDuncanPro.Web.Code.HtmlHelpers
{
    /// Adapted from https://gist.github.com/rupe120/512a9eb837383963f80fd9ef4984eb15
    /// <summary>
    /// Adapted from https://github.com/madskristensen/BundlerMinifier/wiki/Unbundling-scripts-for-debugging
    /// 
    /// Areas modified:
    ///  - Modified it to make it work with aspnetcore.
    ///  - Accept both scripts and styles.
    ///  - Read config from wwwroot
    ///  - Accept baseFolder since DI not suited for static methods
    ///  - Style nitpicks
    /// </summary>
    public class Bundler
    {
        /// <summary>
        /// Unpacks the bundle (css/js) for debugging purposes. Makes the build faster by not bundling while debugging.
        /// </summary>
        /// <param name="baseFolder">The base folder for this application/</param>
        /// <param name="bundlePath">The bundled file to unpack.</param>
        /// <returns>Unpacked bundles</returns>
        public static HtmlString Unpack(string baseFolder, string bundlePath)
        {
            var configFile = Path.Combine(baseFolder, "bundleconfig.json");
            var bundle = GetBundle(configFile, bundlePath);
            if (bundle == null)
                return null;

            // Clean up the bundle to remove the virtual folder that aspnetcore provides.
            //var inputFiles = bundle.InputFiles.Select(file => file.Substring(VirtualFolder.Length));
            var inputFiles = bundle.InputFiles;

            var outputString = bundlePath.EndsWith(".js") ?
                inputFiles.Select(inputFile => $"<script src='{inputFile}' type='text/javascript'></script>") :
                inputFiles.Select(inputFile => $"<link rel='stylesheet' href='{inputFile}' />");

            return new HtmlString(string.Join("\n", outputString));
        }

        /// <summary>
        /// Unpacks the bundle (css/js) output file names, to create routes for debugging purposes
        /// </summary>
        /// <param name="baseFolder">The base folder for this application</param>
        /// <returns></returns>
        public static List<string> GetOutputFileNames(string baseFolder)
        {
            var configFile = Path.Combine(baseFolder, "bundleconfig.json");

            var file = new FileInfo(configFile);
            if (!file.Exists)
                return null;

            return JsonConvert.DeserializeObject<IEnumerable<Bundle>>(File.ReadAllText(configFile))
                .Select(x => x.OutputFileName)
                .ToList();
        }

        private static Bundle GetBundle(string configFile, string bundlePath)
        {
            var file = new FileInfo(configFile);
            if (!file.Exists)
                return null;

            var bundles = JsonConvert.DeserializeObject<IEnumerable<Bundle>>(File.ReadAllText(configFile));
            return (from b in bundles
                    where b.OutputFileName.EndsWith(bundlePath, StringComparison.InvariantCultureIgnoreCase)
                    select b).FirstOrDefault();
        }

        class Bundle
        {
            [JsonProperty("outputFileName")]
            public string OutputFileName { get; set; }

            [JsonProperty("inputFiles")]
            public List<string> InputFiles { get; set; } = new List<string>();
        }
    }
}
