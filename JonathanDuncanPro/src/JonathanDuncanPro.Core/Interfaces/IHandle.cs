using JonathanDuncanPro.Core.SharedKernel;

namespace JonathanDuncanPro.Core.Interfaces
{
    public interface IHandle<T> where T : BaseDomainEvent
    {
        void Handle(T domainEvent);
    }
}