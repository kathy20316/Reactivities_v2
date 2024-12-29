using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Activities
{
    public class List
    {
        // Query class: send any data from the API, put them down as properties in the class

        public class Query : IRequest<List<Activity>> { }

        // Handler class: mediator query handler, takes in the Query class and returns a list of activities
        public class Handler : IRequestHandler<Query, List<Activity>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Activity>> Handle(Query request, CancellationToken cancellationToken)
            {  
                return await _context.Activities.ToListAsync();
            }
        }

    }
}