const entries = [
  {
    id: "5EC1C655-BA73-4E95-A49C-55E66F740DF8",
    createdAt: "1905-04-15T14:20:00.000Z",
    updatedAt: "1905-04-16T13:20:00.000Z",
    username: "theodore_j",
    title: "Splendid Establishment!",
    content:
      "By Jove, what a delightful stay! I shall certainly return posthaste.",
    language: "en",
  },
  {
    id: "6FD1D756-BC84-5F96-B59D-65F77G851EJ9",
    createdAt: "1923-06-10T11:30:00.000Z",
    updatedAt: "1923-06-11T10:00:00.000Z",
    username: "mary_pickford",
    title: "The Bee's Knees!",
    content: "This place is simply the cat's pajamas! Had a roaring good time.",
    language: "en",
  },
  {
    id: "7GE2E857-CD95-6G07-C6AE-76G88H962FK0",
    createdAt: "1945-08-07T18:45:00.000Z",
    updatedAt: "1945-08-08T16:45:00.000Z",
    username: "johnny_boy",
    title: "A Touch of Home",
    content:
      "After the war, this place feels like a slice of home. Bless you all.",
    language: "en",
  },
  {
    id: "8HF3F958-DEA6-7H18-D7BF-87H99I073GL1",
    createdAt: "1969-07-21T09:15:00.000Z",
    updatedAt: "1969-07-22T08:15:00.000Z",
    username: "moonwalker",
    title: "Far Out Experience!",
    content: "This place is as cool as the dark side of the moon. Groovy!",
    language: "en",
  },
  {
    id: "9IG4G059-EFB7-8I29-E8CG-98I10J184HM2",
    createdAt: "1985-10-26T05:00:00.000Z",
    updatedAt: "1985-10-27T04:00:00.000Z",
    username: "mcfly",
    title: "Totally Tubular!",
    content: "This place is rad! I had a blast to the past.",
    language: "en",
  },
  {
    id: "10JH5H16-FGC8-9J30-F9DH-10J21K295IN3",
    createdAt: "1999-12-31T23:59:00.000Z",
    updatedAt: "2000-01-01T22:59:00.000Z",
    username: "party2k",
    title: "Millennial Magic",
    content: "Ringing in the new millennium here? Best decision ever!",
    language: "en",
  },
  {
    id: "11KI6I27-GHD9-0K41-G0EI-11K32L306JO4",
    createdAt: "2010-07-11T16:40:00.000Z",
    updatedAt: "2010-07-12T15:40:00.000Z",
    username: "digital_nomad",
    title: "Modern Comfort",
    content: "Loved the WiFi! Perfect for a digital nomad like me.",
    language: "en",
  },
  {
    id: "12LJ7J38-HIE0-1L52-H1FJ-12L43M417KP5",
    createdAt: "2020-03-15T12:20:00.000Z",
    updatedAt: "2020-03-16T11:20:00.000Z",
    username: "quarantine_queen",
    title: "Perfect Lockdown Locale",
    content:
      "Staying here during the pandemic was a breath of fresh air. Safe and serene.",
    language: "en",
  },
  {
    id: "13MK8K49-IJF1-2M63-I2GK-13M54N528LQ6",
    createdAt: "2023-02-22T14:50:00.000Z",
    updatedAt: "2023-02-23T13:50:00.000Z",
    username: "futureseeker",
    title: "Ahead of Its Time",
    content:
      "Everything about this place feels innovative and forward-thinking. Love it!",
    language: "en",
  },
  {
    id: "15OM0M61-KLH3-4O85-K4IM-15O76P740NS8",
    createdAt: "2019-03-11T06:40:00.000Z",
    updatedAt: "2020-06-17T04:40:00.000Z",
    username: "hans_gruber",
    title: "Wundervoller Aufenthalt",
    content:
      "Vielen Dank für die Gastfreundschaft. Wir haben uns wie zu Hause gefühlt!",
    language: "de",
  },
  {
    id: "16PN1N72-LMI4-5P96-L5JN-16P87Q851OT9",
    createdAt: "2018-11-09T09:15:00.000Z",
    updatedAt: "2021-01-13T07:15:00.000Z",
    username: "maria_schmidt",
    title: "Tolle Erfahrung",
    content: "Ein unvergessliches Erlebnis. Wir kommen gerne wieder.",
    language: "de",
  },
  {
    id: "17QO2O83-MNJ5-6Q07-M6KO-17Q98R962PU0",
    createdAt: "2019-08-04T14:05:00.000Z",
    updatedAt: "2021-04-19T12:05:00.000Z",
    username: "franz_weber",
    title: "Erholsamer Urlaub",
    content: "Die Ruhe hier ist unbeschreiblich. Perfekt zum Entspannen!",
    language: "de",
  },
  {
    id: "18RP3P94-NOJ6-7R18-N7LP-18R10S073QV1",
    createdAt: "2018-02-27T11:50:00.000Z",
    updatedAt: "2019-07-22T09:50:00.000Z",
    username: "julia_klein",
    title: "Gemütliches Ambiente",
    content:
      "Die Atmosphäre hier ist einmalig. Wir haben jeden Moment genossen.",
    language: "de",
  },
  {
    id: "19SQ4Q05-OPK7-8S29-O8MN-19S21T184RV2",
    createdAt: "2021-09-15T10:25:00.000Z",
    updatedAt: "2021-09-16T08:25:00.000Z",
    username: "lukas_bauer",
    title: "Ein Ort zum Wiederkommen",
    content:
      "Das Personal war so freundlich, und der Service war erstklassig. Bis zum nächsten Mal!",
    language: "de",
  },

  {
    id: "20XV6X10-UKP1-1V01-UK1A-20X12U345EW1",
    createdAt: "1605-06-15T12:30:00.000Z",
    updatedAt: "1605-06-16T11:15:00.000Z",
    username: "william_shakespeare",
    title: "A Midsummer's Visit",
    content:
      "Methinks this inn hath charm aplenty. A night's rest fit for Oberon himself!",
    language: "en",
  },
  {
    id: "21YV7Y11-UKQ2-2V02-UK2B-21Y13V456FX2",
    createdAt: "1680-07-14T09:40:00.000Z",
    updatedAt: "1680-07-15T08:35:00.000Z",
    username: "john_locke",
    title: "Enlightened Stays",
    content:
      "The ambiance of this establishment speaks of reason and understanding.",
    language: "en",
  },
  {
    id: "22ZW8Z12-ULR3-3W03-UL3C-22Z14W567GY3",
    createdAt: "1750-03-19T10:20:00.000Z",
    updatedAt: "1750-03-20T09:45:00.000Z",
    username: "benjamin_franklin",
    title: "Electric Atmosphere",
    content:
      "A most invigorating experience. The hospitality here is truly electrifying!",
    language: "en",
  },
  {
    id: "23AX9A13-UMS4-4X04-UM4D-23A15X678HZ4",
    createdAt: "1825-05-23T07:25:00.000Z",
    updatedAt: "1825-05-24T06:55:00.000Z",
    username: "jane_austen",
    title: "Picturesque Retreat",
    content:
      "Such a delightful spot, with all the civilities one could hope for.",
    language: "en",
  },
  {
    id: "24BY0B14-UNT5-5Y05-UN5E-24B16Y789IA5",
    createdAt: "1895-09-11T15:40:00.000Z",
    updatedAt: "1895-09-12T14:20:00.000Z",
    username: "oscar_wilde",
    title: "Dandy Respite",
    content:
      "I find this locale both charming and utterly scandalous. Pure perfection.",
    language: "en",
  },
  {
    id: "25CZ1C15-DEP6-6Z06-DE6F-25C17Z890JB6",
    createdAt: "1610-02-17T13:50:00.000Z",
    updatedAt: "1610-02-18T12:25:00.000Z",
    username: "johann_kepler",
    title: "Stellare Gastfreundschaft",
    content:
      "Ein Ort, der so hell leuchtet wie die Sterne selbst. Ein wahrer Genuss!",
    language: "de",
  },
  {
    id: "26DZ2D16-DFQ7-7A07-DF7G-26D18A901KC7",
    createdAt: "1690-11-08T16:10:00.000Z",
    updatedAt: "1690-11-09T14:55:00.000Z",
    username: "gottfried_leibniz",
    title: "Rationale Ruhe",
    content: "Dieses Gasthaus verbindet Gemütlichkeit mit klarem Denken.",
    language: "de",
  },
  {
    id: "27EA3E17-DGR8-8B08-DG8H-27E19B012LD8",
    createdAt: "1785-04-04T08:05:00.000Z",
    updatedAt: "1785-04-05T07:00:00.000Z",
    username: "wolfgang_goethe",
    title: "Dichterische Inspiration",
    content: "Ein Ort, der die Seele erhebt und die Muse zum Singen bringt.",
    language: "de",
  },
  {
    id: "28FB4F18-DHS9-9C09-DH9I-28F20C123ME9",
    createdAt: "1850-10-29T10:10:00.000Z",
    updatedAt: "1850-10-30T09:50:00.000Z",
    username: "otto_von_bismarck",
    title: "Preußische Perfektion",
    content: "Ein Musterbeispiel für deutsche Gastfreundschaft.",
    language: "de",
  },
  {
    id: "29GC5G19-DIT0-0D10-DI0J-29G21D234NF0",
    createdAt: "1890-08-01T11:45:00.000Z",
    updatedAt: "1890-08-02T11:10:00.000Z",
    username: "richard_wagner",
    title: "Musikalische Harmonie",
    content: "Der Klang der Stille hier ist genauso bewegend wie eine Oper.",
    language: "de",
  },
];

import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession();
  return NextResponse.json(entries);
}
