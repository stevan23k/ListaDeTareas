create database tareasdb

create table tareas(
    id serial primary key,
    titulo varchar(100),
    descripcion varchar(255),

);