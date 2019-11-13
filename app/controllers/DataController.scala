package controllers

import javax.inject._
import play.api._
import play.api.db.Database
import play.api.mvc._

/**
 * This controller creates an `Action` to handle HTTP requests to the
 * application's home page.
 */
@Singleton
class DataController @Inject()(db: Database, val controllerComponents: ControllerComponents) extends BaseController {
  def index() = Action { implicit request: Request[AnyContent] =>
    val conn = db.getConnection()
    try {
      val stmt = conn.createStatement()
      val rs = stmt.executeQuery("MATCH (c:Client)-[t]-(c1) RETURN c,t,c1")
      
    } finally {

    }
    Ok(views.html.index())
  }
}
