using JonathanDuncanPro.Core.Interfaces;
using JonathanDuncanPro.Core.SharedKernel;

namespace JonathanDuncanPro.Tests
{
    public class NoOpDomainEventDispatcher : IDomainEventDispatcher
    {
        public void Dispatch(BaseDomainEvent domainEvent) { }
    }
}
