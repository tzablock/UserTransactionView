package controllers

import entities.Client
import javax.inject._
import play.api._
import play.api.db.Database
import play.api.mvc._
import const.Queries._
import play.api.libs.json.Json


/**
 * This controller creates an `Action` to handle HTTP requests to the
 * application's home page.
 */
@Singleton
class DataController @Inject()(db: Database, val controllerComponents: ControllerComponents) extends BaseController {

  //Add transaction two clients ids


  //Get diagram with clients and transactions

  //get list of possible clients to add transaction
  def listOfClientIds() = Action { implicit  request: Request[AnyContent] =>
    db.withConnection{ conn =>
      val stmt = conn.createStatement()
      stmt.executeQuery(GET_ALL_CLIENT_IDS_QUERY)
    }
    Ok(Json.toJson(Array(1,2,3)))
  }

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
