export function manageFriends(state, action){
  debugger
  switch (action.type) {
    case "ADD_FRIEND":
   return (
     {...state,
         friends: [
           ...state.friends,
           action.friend
         ]
     })

    case "REMOVE_FRIEND":
      const friends = state.friends.filter(friend => friend.id !== action.id);
      return (
        {friends}
      )

    default:
      return state
  }
}
