### Postgres ###
1. Connect to postgres container using psql client
```bash
  docker exec -it database psql -U postgres -d postgres
```
2. List Tables in current schema
```bash 
  \dt
```
3. List Tables in All Schema
```bash
  \dt *.*
```
4. Inspect Table
```bash
  \d table_name
```