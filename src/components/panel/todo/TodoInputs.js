import { Container, Grid, TextField, Button, Typography } from '@mui/material'
import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axios from '../../../service/axios'
import { setNewTodo,clearNewTodo,addTodo,fetchTodos } from '../../../store/slices/todoSlice'

export default function Todo() {
    const todo = useSelector(state => state.todo.newTodo)
    useEffect(() => {
        console.log(todo)
    }, []);
    const dispatch = useDispatch();
    const handleChange = (e) =>{
        dispatch(setNewTodo({...todo, [e.target.name]: e.target.value}))
    }
    const handleAddTodo = (e) => {
       dispatch(addTodo(todo))
      // dispatch(fetchTodos())
    }
    return (
        <Container>
            <Grid container justifyContent="center" alignItems="center" rowSpacing={3} mt={1} >
                <Grid item md={12} xs={12}>
                    <Typography variant="h4" >Todo</Typography>
                </Grid>
                <Grid item md={6} xs={12}>
                    <TextField value={todo.title} name="title" onChange={handleChange} fullWidth label="Title" />
                </Grid>
                <Grid item md={6} xs={12}>
                    <TextField value={todo.content} name="content" onChange={handleChange} fullWidth label="Content" />
                </Grid>
                <Grid item md={6} xs={12}>
                    <Button variant="outlined" fullWidth onClick={() => {
                        handleAddTodo();
                    }}>Save</Button>
                </Grid>

            </Grid>
        </Container>
    )
}
