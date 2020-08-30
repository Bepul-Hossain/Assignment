// import React, { Component } from 'react'
import React, {Component} from 'react'
import ReactTable from 'react-table'
import api from './api.js'

import styled from 'styled-components'
import 'react-table/react-table.css'

const Wrapper = styled.div `padding: 0  40px 40px 40px`

const Delete = styled.div `color: #ef9bof; cursor: pointer`
const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`



class MoviesList extends Component {
    constructor(props){
        super(props)
        this.state={
            movies: [],
            columns: [],
            isLoading: false,
        }
    }
    componentDidMount = async()=>{
        this.setState({isLoading: true})

        await api.getAllMovies().then(movies=>{
            this.setState({
                movies: movies.data.data,
                isLoading: false,
            })
        })
    }
    render() {
        const { movies, isLoading} = this.state
        console.log('TCL: MovieList->render->movies',movies)
        console.log('successfull')
        
        const columns=[
            {
                Header: 'ID',
                accessor: '_id',
                filterable: true,
            },
            {
                Header: 'Name',
                accessor: 'name',
                filterable: true,
            }

        ]

        var showTable = true
        if(!movies.length){
            showTable = false
            return(
                <h4>No data row added till now</h4>
            )
        }
        return (
            <Wrapper>
                {
                    showTable &&(
                        <ReactTable
                        data={movies}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                    )
                }
                
            </Wrapper>
        )
    }
}

export default MoviesList
