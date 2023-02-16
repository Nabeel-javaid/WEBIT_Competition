
import Twilio from "twilio";

const client = new Twilio("ACeaf77ead88f6760ce9fc77c33db4615a", process.env.AUTH);

export default function handler(req, res) {
    console.log("Hello resqusa")
  if (req.method == "POST") {

   //get the departure_time , departure_airport and arrival_airport from the request body
    const { departure_time, departure_airport, arrival_airport } = req.body;

    console.log("Allah O Akbar")
    //send the SMS
    client.messages
        .create({
            body: `Your flight from ${departure_airport} to ${arrival_airport} is scheduled to depart at ${departure_time}`,
            from: "+16193049350",
            to: "+923435100977",
        })
        .then((message) => console.log(message.sid))
        .catch((err) => console.log(err));
  }
}
