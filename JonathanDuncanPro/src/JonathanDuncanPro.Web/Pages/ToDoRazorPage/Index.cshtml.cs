﻿using JonathanDuncanPro.Core.Entities;
using JonathanDuncanPro.Core.Interfaces;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Collections.Generic;

namespace JonathanDuncanPro.Web.Pages.ToDoRazorPage
{
    public class IndexModel : PageModel
    {
        private readonly IRepository _repository;

        public List<ToDoItem> ToDoItems { get; set; }

        public IndexModel(IRepository repository)
        {
            _repository = repository;
        }

        public void OnGet()
        {
            ToDoItems = _repository.List<ToDoItem>();
        }
    }
}
