import React from 'react'
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const ShowsListItem = ({movies}) => (
    <Link style={{ textDecoration: 'none' }} to={`/showsinfo/${movies.show.id}`}  >

        
        {movies.show.image && movies.show.image.medium &&
            <ListItem button>
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={movies.show.image.medium} />
                </ListItemAvatar>
                <ListItemText primary={movies.show.name} />
            </ListItem>
        }
        
        
        
    </Link>
)

function MovieList(props) {
    return (
        <div style={{
            display:'flex',
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems:'center',
            
        }}>
            <List component="nav">
                {props.list.map(movies =>(
                    <ShowsListItem movies={movies} key={movies.show.id} />
                ))}
            </List>
        </div>
    )
}

export default MovieList;