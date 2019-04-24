using Ardalis.GuardClauses;
using JonathanDuncanPro.Core.Events;
using JonathanDuncanPro.Core.Interfaces;

namespace JonathanDuncanPro.Core.Services
{
    public class ToDoItemService : IHandle<ToDoItemCompletedEvent>
    {
        public void Handle(ToDoItemCompletedEvent domainEvent)
        {
            Guard.Against.Null(domainEvent, nameof(domainEvent));

            // Do Nothing
        }
    }
}
