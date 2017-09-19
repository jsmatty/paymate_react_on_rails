# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

House.destroy_all
User.destroy_all
Bill.destroy_all

house1 = House.create({nickname: "Gryffindor"})
house2 = House.create({nickname: "Ravenclaw"})
house3 = House.create({nickname: "Slytherin"})

user1 = User.create({house_id: house1.id, name: "Harry Potter", email: "potter.harry@hogwarts.com", password_digest: "stag", username: "ChosenOne", birthday: "July 31", bio: "Master of Death.", image: "https://i.imgur.com/escrDRM.jpg?1"})
user2 = User.create({house_id: house1.id, name: "Neville Longbottom", email: "longbottom.neville@hogwarts.com", password_digest: "1234567", username: "ProfNev", birthday: "July 30", bio: "R.I.P Trevor Toad", image: "https://i.imgur.com/eNaPIgE.jpg?1"})

user3 = User.create({house_id: house2.id, name: "Luna Lovegood", email: "lovegood.luna@hogwarts.com", password_digest: "hare", username: "LoonyLuna", birthday: "February 13", bio: "M.a.g.i.z.o.ologist", image: "https://i.imgur.com/ZzwPfT7.jpg?1"})
user4 = User.create({house_id: house2.id, name: "Rowena Ravenclaw", email: "ravenclaw.rowena@hogwarts.com", password_digest: "scotland", username: "FairRavie", birthday: "", bio: "I founded. I died.", image: "https://i.imgur.com/HqCxmMS.jpg?1"})

user5 = User.create({house_id: house3.id, name: "Tom Riddle", email: "riddle.tom@hogwarts.com", password_digest: "voldy", username: "MouldyVoldy", birthday: "May 2", bio: "Death Eaterz 4 lyfe.", image: "https://i.imgur.com/vMHQr3N.jpg?1"})
user6 = User.create({house_id: house3.id, name: "Severus Snape", email: "severus.snape@hogwarts.com", password_digest: "doedoe", username: "OlSev", birthday: "November 2", bio: "My birthday is actually May 2nd but, Tom copied me.", image: "https://i.imgur.com/wYb5XjI.jpg?1"})

bill1 = Bill.create({house_id: house1.id, utility: "water", company: "Hogwarts Water Co.", phone_number: "+44 1632 960125", account_number: "NSG36MND", name: "Neville Longbottom", email: "longbottom.neville@hogwarts.com"})
bill2 = Bill.create({house_id: house1.id, utility: "cable", company: "Hogwarts Cable Co.", phone_number: "+44 1632 960551", account_number: "1I11TUXK", name: "Neville Longbottom", email: "longbottom.neville@hogwarts.com"})
bill3 = Bill.create({house_id: house1.id, utility: "power", company: "Hogwarts Power Co.", phone_number: "+44 1632 960235", account_number: "U3NZ1N8D", name: "Harry Potter", email: "potter.harry@hogwarts.com"})
bill4 = Bill.create({house_id: house1.id, utility: "gas", company: "Hogwarts Gas Co.", phone_number: "+44 1632 960721", account_number: "EVURGNOJ", name: "Harry Potter", email: "potter.harry@hogwarts.com"})

bill5 = Bill.create({house_id: house2.id, utility: "gas", company: "GB Gas Co.", phone_number: "+44 3069 990038", account_number: "L064U8Z4", name: "Luna Lovegood", email: "lovegood.luna@hogwarts.com"})
bill6 = Bill.create({house_id: house2.id, utility: "water", company: "GB Water Co.", phone_number: "+44 3069 990622", account_number: "VN9TMLBN", name: "Rowena Ravenclaw", email: "ravenclaw.rowena@hogwarts.com"})
bill7 = Bill.create({house_id: house2.id, utility: "power", company: "GB Power Co.", phone_number: "+44 3069 990916", account_number: "KRY1A3HT", name: "Luna Lovegood", email: "lovegood.luna@hogwarts.com"})


bill8 = Bill.create({house_id: house3.id, utility: "cable", company: "Azkaban Cable Co.", phone_number: "(251) 546-9442", account_number: "LFTQCUOC", name: "Tom Riddle", email: "riddle.tom@hogwarts.com"})
bill9 = Bill.create({house_id: house3.id, utility: "power", company: "Azkaban Power Co.", phone_number: "(226) 906-2721", account_number: "GB0PZCCH", name: "Tom Riddle", email: "riddle.tom@hogwarts.com"})
bill10 = Bill.create({house_id: house3.id, utility: "gas", company: "Azkaban Gas Co.", phone_number: "(949) 569-4371", account_number: "6FSMCK50", name: "Severus Snape", email: "severus.snape@hogwarts.com"})
bill11 = Bill.create({house_id: house3.id, utility: "water", company: "Azkaban Water Co.", phone_number: "(404) 661-6789", account_number: "TG5KTWUF", name: "Severus Snape", email: "severus.snape@hogwarts.com"})
