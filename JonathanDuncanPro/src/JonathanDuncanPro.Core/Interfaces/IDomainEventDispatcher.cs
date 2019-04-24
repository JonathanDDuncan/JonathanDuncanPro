using JonathanDuncanPro.Core.SharedKernel;

namespace JonathanDuncanPro.Core.Interfaces
{
    public interface IDomainEventDispatcher
    {
        void Dispatch(BaseDomainEvent domainEvent);
    }
}