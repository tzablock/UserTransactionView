package const

import entities.Client

object Queries {
  val CLIENT_INSERT_QUERY = (client: Client) => s"CREATE (c:Client { client_id: '${client.client_id}', name: '${client.name}', surname: '${client.surname}', nationality: '${client.nationality}', birth_date: '${client.birth_date}', current_location: '${client.current_location}', place_of_birth: '${client.place_of_birth}'})";
  val GET_ALL_CLIENT_IDS_QUERY = "MATCH (c:Client) RETURN c.client_id"
}
