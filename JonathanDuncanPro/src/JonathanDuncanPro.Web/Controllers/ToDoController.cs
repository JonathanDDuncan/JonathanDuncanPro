﻿using JonathanDuncanPro.Core;
using JonathanDuncanPro.Core.Entities;
using JonathanDuncanPro.Core.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace JonathanDuncanPro.Web.Controllers
{
    public class ToDoController : Controller
    {
        private readonly IRepository _repository;

        public ToDoController(IRepository repository)
        {
            _repository = repository;
        }

        public IActionResult Index()
        {
            var items = _repository.List<ToDoItem>();
            return View(items);
        }

        public IActionResult Populate()
        {
            int recordsAdded = DatabasePopulator.PopulateDatabase(_repository);
            return Ok(recordsAdded);
        }
    }
}
