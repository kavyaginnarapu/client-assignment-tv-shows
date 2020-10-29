import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Search from '../searchComponents/Search';
import Container from '@material-ui/core/Container';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import { Typography } from '@material-ui/core';
import '../../index.css';
import Pagination from '../pagination/Pagination';

export class ShowsHome extends Component {

    constructor(props) {
        super(props)
        this.state = {
            tvShows: [],
            currentShows: [],
            currentPage: null,
            totalPages: null,
            genres:[],
            pagination: true
        }
    }

    async componentDidMount() {
        let value=[];
        const res = await fetch("https://api.tvmaze.com/shows"),
              data = await res.json();
              if(data){
                data.map((result) => {
                    result.genres.map((name)=>{
                     value.push(name);
                    })
                });
             }
             let genres = [...new Set(value)];
                 this.setState({
                     tvShows: data,
                     genres: genres
                 });
      }
      

    onSearchGeneres=(genere) =>{
        
                if(this.state.tvShows){
                    let value=[];
                    this.state.tvShows.map((data,index)=>{
                       data.genres.map((name) => {
                            if (name === genere) {
                                value.push(data)
                            }
                          });   
                    });
                    this.setState({
                       
                        currentShows: value,
                        pagination: false
                    });           
                }   
    }

    onPageChanged = data => {
        const { tvShows } = this.state;
        const { currentPage, totalPages, pageLimit } = data;
        const offset = (currentPage - 1) * pageLimit;
        const currentShows = tvShows.slice(offset, offset + pageLimit);

        this.setState({ currentPage, currentShows, totalPages });
    }
    render() {

        const { tvShows, currentShows, currentPage, totalPages } = this.state;

        const totalShows = tvShows.length;

        if (totalShows === 0) return null;

        const headerClass = ['text-dark py-2 pr-4 m-0', currentPage ? 'border-gray border-right' : ''].join(' ').trim();
        let pageLimit = 4;

        return (
            <Container>
                <div> <Search /></div>
                <div>
                <div>
                    {this.state.genres && this.state.genres.map((genre)=>{
                        return <Button color="primary" id='Contact-button-submit'
                        onClick={()=>this.onSearchGeneres(genre)}
                        >{genre}</Button>
                    })}
                    
                    
                </div>
                <div className="gridContainer" spacing={3}>
               
               {currentShows.map((item, id) => {
                   return (
                       <div key={id} style={{ textAlign: 'justify' }} className='gridItem' >
                           <Link style={{ textDecoration: 'none' }} to={`/showsinfo/${item.id}`}  >
                               <div>
                                   <CardMedia style={{ height: 400 }} component="img" image={item.image.original} />
                                   
                                   <CardContent>
                                       <Typography  >
                                           {item.name}
                                       </Typography>
                                       <Button startIcon={<StarRoundedIcon />} variant="contained" color="secondary">
                                           {item.rating.average}
                                       </Button><br />
                                       <Typography >
                                           Premiered: {item.premiered}
                                       </Typography>
                                       <Typography>
                                       Genres:
                                       {item.genres.map((genre, id) => {
                                           return (
                                               <span key={id}>
                                                   <br/>{genre + ','}
                                               </span>
                                           )
                                       }
                                       )}
                                       </Typography>
                                   </CardContent>
                                   <CardActions>
                                   </CardActions>
                               </div>
                           </Link>
                       </div>
                   )
               })}
           </div>
           
                </div>
               {this.state.pagination && 
                <div className="w-100 px-4 py-5 d-flex flex-row flex-wrap align-items-center justify-content-between">
                <Typography className={headerClass}>
                    {totalShows} <span>TVMAZE Shows</span>
                    {currentPage && (
                        <Typography className="current-page d-inline-block h-100 pl-4 text-secondary">
                            Page {currentPage} / {totalPages}
                        </Typography>
                    )}
                </Typography>

                <div className="d-flex flex-row py-4 align-items-center">
                    <Pagination
                        totalRecords={totalShows}
                        pageLimit={pageLimit}
                        pageNeighbours={1}
                        onPageChanged={this.onPageChanged} />
                </div>

            </div>
       
               }
               
            </Container>
        )
    }
}


export default ShowsHome