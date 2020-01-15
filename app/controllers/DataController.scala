package controllers

import entities.Client
import javax.inject._
import play.api._
import play.api.db.Database
import play.api.mvc._
import play.mvc.BodyParser.Json
import const.Queries._

/**
 * This controller creates an `Action` to handle HTTP requests to the
 * application's home page.
 */
@Singleton
class DataController @Inject()(db: Database, val controllerComponents: ControllerComponents) extends BaseController {

  //Add transaction two clients ids

  //Get diagram with clients and transactions

  //get list of possible clients to add transaction

  //Add id uniques
//Client (client id, name, surname, nationality, birth day, current location, place of birth)
  def clientInsert() = Action { implicit request: Request[AnyContent] =>
    request.body.asJson.get.validate[Client].fold(
      errors => BadRequest(errors.mkString),
      client => {
        db.withConnection { conn =>
          val stmt = conn.createStatement()
          stmt.executeQuery(CLIENT_INSERT_QUERY.apply(client))
        }
        Ok(s"Client with id: ${client.client_id} inserted.")
      }
    )
  }
}
