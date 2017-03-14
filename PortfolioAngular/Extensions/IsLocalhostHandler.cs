using Microsoft.AspNetCore.Authorization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PortfolioAngular.Extensions
{
    public class IsLocalhostHandler : AuthorizationHandler<IsLocalhostRequirement> {
        protected override Task HandleRequirementAsync(AuthorizationHandlerContext context, IsLocalhostRequirement requirement) {
            if (context.Resource is Microsoft.AspNetCore.Mvc.Filters.AuthorizationFilterContext mvcContext) {
                var httpContext = mvcContext.HttpContext;
                var connection = httpContext.Connection;
                if (connection.IsLocal()) {
                    context.Succeed(requirement);
                }
            }
            return Task.CompletedTask;
        }
    }
    public class IsLocalhostRequirement : IAuthorizationRequirement {
        public IsLocalhostRequirement() {
        }
    }    
}
