import classes from './UserList.module.css';
import Card from '../UI/Card';

const UserList = (props) => {
    console.log(props.users);
    return (
        <Card className={classes.users}>
            <ul>
                {props.users.map((user) => (
                    <li key={user.id}>
                        {user.username} is ({user.age} years old).
                    </li>
                ))}
            </ul>
        </Card>
    );
}
 
export default UserList;