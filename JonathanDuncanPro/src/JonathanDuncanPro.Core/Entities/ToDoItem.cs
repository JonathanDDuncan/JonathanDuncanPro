﻿using JonathanDuncanPro.Core.Events;
using JonathanDuncanPro.Core.SharedKernel;

namespace JonathanDuncanPro.Core.Entities
{
    public class ToDoItem : BaseEntity
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public bool IsDone { get; private set; }

        public void MarkComplete()
        {
            IsDone = true;
            Events.Add(new ToDoItemCompletedEvent(this));
        }
    }
}
