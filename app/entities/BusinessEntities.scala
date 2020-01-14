package entities

import java.util.Date

import play.api.libs.json.Json

//Client (client id, name, surname, nationality, birth day, current location, place of birth)
case class Client(client_id: String, name: String, surname: String, nationality: String, birth_date: Date, current_location: String, place_of_birth: String)
object Client {
  implicit val fmt = Json.format[Client]
}
//Transaction (transaction_id, amount_of_transaction, currency, reason)
case class Transaction(transaction_id: String, amount_of_transaction: Int, currency: String, reason: String)