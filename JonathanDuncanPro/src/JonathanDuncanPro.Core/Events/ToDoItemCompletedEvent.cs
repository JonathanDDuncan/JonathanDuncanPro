using JonathanDuncanPro.Core.Entities;
using JonathanDuncanPro.Core.SharedKernel;

namespace JonathanDuncanPro.Core.Events
{
    public class ToDoItemCompletedEvent : BaseDomainEvent
    {
        public ToDoItem CompletedItem { get; set; }

        public ToDoItemCompletedEvent(ToDoItem completedItem)
        {
            CompletedItem = completedItem;
        }
    }
}