# Database Conventions
1. Table's names representing real-world data are plural words using lower letters
For example: "users", "messages", "offers"
2. If a table needs more words to be described and more relevant, do it so by using an underscore "_"
For example: a concert offer can't use "offers" since it already exists and describes something more general, and concert is not precise enough. Thus, we will use "concert_offers"
3. Joined table are written "table1_and_table2"
4. Tables' id must use "table_id" format, "table" being singular