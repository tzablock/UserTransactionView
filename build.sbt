name := """UserTransactionView"""
organization := "com.transaction"

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayScala)

scalaVersion := "2.13.1"

libraryDependencies += guice
libraryDependencies += "org.scalatestplus.play" %% "scalatestplus-play" % "4.0.3" % Test
libraryDependencies += "org.neo4j" % "neo4j-jdbc-driver" % "3.4.0"
libraryDependencies += jdbc

val appDependencies = Seq(
  filters
)
// Adds additional packages into Twirl
//TwirlKeys.templateImports += "com.transaction.controllers._"

// Adds additional packages into conf/routes
// play.sbt.routes.RoutesKeys.routesImport += "com.transaction.binders._"
