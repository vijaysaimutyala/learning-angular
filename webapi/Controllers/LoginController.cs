using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Cors;
using System.Web.Http.Cors;
using webapi.Models;

namespace webapi.Controllers
{
    [RoutePrefix("login")]
    [EnableCors("*", "*", "*")]
    public class LoginController : ApiController
    {
        [HttpPost]
        [Route("authenticate")]
        public IHttpActionResult Authenticate([FromBody]Login loginInfo) {
           return  ResponseMessage(Request.CreateResponse(HttpStatusCode.OK, loginInfo));
        }
    }
}
