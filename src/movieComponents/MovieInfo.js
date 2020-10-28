import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../index.css'

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';
import StarRoundedIcon from '@material-ui/icons/StarRounded';

const classes = makeStyles(theme => ({
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        GridTemplateRow: 'auto',
        gridGap: theme.spacing(5),
    },
    Grid: {
        textAlign: 'justify',
    },
    divider: {
        margin: theme.spacing(2, 0),
    },
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}));


export class MovieInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movieDetails: {},
            loading: true
        }
    }


    componentDidMount() {
        
        let id = this.props.location && this.props.location.pathname.split('/')[2];

        fetch(`https://api.tvmaze.com/shows/${id}?embed=cast`)
            .then((response) => response.json())
            .then((details) => {
                this.setState({
                    movieDetails: details,
                    loading: false
                });
            })
    }

    render() {

        return (
            <Container className={classes.root}>
                {this.state.loading ? (
                    <div>Loading...</div>
                ) : (
                        <div classname="movieDetails">
                            <div className="posterContainer" style={{ paddingTop: '3%' }}>
                                <div className="poster" style={{ borderRadius: 5 }}>
                                    <Card>
                                        <CardMedia
                                            style={{ height: 550 }}
                                            component="img"
                                            image={this.state.movieDetails.image.original}
                                        />
                                        <CardContent style={{ textAlign: 'justify' }}>
                                            <Typography variant="contained" >
                                                {this.state.movieDetails.name}
                                            </Typography><br />
                                            <Typography variant="outlined" >
                                                Premiered: {this.state.movieDetails.premiered}
                                            </Typography><br />
                                            <Typography startIcon={<StarRoundedIcon />} variant="contained" color="primary">
                                                Rating : {this.state.movieDetails.rating.average}
                                            </Typography><br />
                                            <Typography variant="outlined" >
                                                Genres: {this.state.movieDetails.genres.map((genre, id) => {
                                                return (
                                                    <span key={id}>
                                                        {genre + ' '}
                                                    </span>
                                                )
                                            }
                                            )}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </div>

                                <div className="movieInfo" xs={8} style={{ textAlign: 'justify', }}>
                                    <div className="summary">
                                        <Typography variant="contained" style={{fontWeight: 'bold',fontSize: '18px'}} >
                                            Summary
                                        </Typography>
                                        <br />
                                        <div dangerouslySetInnerHTML={ {__html: this.state.movieDetails.summary} } />
                                    </div>
                                    <Divider />
                                    <div className="summaryDetails">
                                        <Typography variant="contained" >
                                            Language: {this.state.movieDetails.language}
                                        </Typography>
                                    </div>
                                    <Divider />
                                    <div className="summaryDetails">
                                        <Typography variant="contained" >
                                            Runtime:
                                  </Typography> {this.state.movieDetails.runtime}

                                    </div>
                                    <Divider />
                                    <div className="summaryDetails">
                                        <Typography variant="contained" >
                                            Schedule: {this.state.movieDetails.schedule.days.map((day, id) => {
                                            return (
                                                <span key={id}>
                                                    {day + ' '}
                                                </span>
                                            )
                                        })}{this.state.movieDetails.schedule.time}
                                    </Typography><br />

                                    </div>
                                     <Divider />
                                    <div className="summaryDetails">
                                    <Typography variant="contained" >
                                        Status: {this.state.movieDetails.status}
                                    </Typography>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Button variant="contained" color="primary">
                                   Cast<br />
                                </Button>
                            </div>

                            <div className="castContainer">

                                {this.state.movieDetails._embedded.cast.map((actor, id) => {
                                    
                                    return (
                                        <div classname="cast" item xs={3} key={id}>
                                            <div>
                                                {actor.person && actor.person.image &&
                                                 <Card>
                                                 <CardMedia
                                                     style={{ height: 350, width: 300 }}
                                                     component="img"
                                                     image={actor.person.image.original}
                                                 />
                                                 <CardContent>
                                                     <Typography component="h2">
                                                         {actor.person.name}
                                                     </Typography>
                                                 </CardContent>
                                             </Card>
                                                }
                                               
                                            </div>
                                        </div>
                                    )
                                })}
                                <div item xs={3} style={{ justifyContent: 'center', alignContent: 'center', paddingTop: '10%' }}>
                                    <Link style={{ textDecoration: 'none' }} to="/">
                                        <Button variant="contained" color="primary">Home Page</Button>
                                    </Link>
                                </div>
                            </div>
                        </div>)}
            </Container>
        )
    }
}

export default MovieInfo
