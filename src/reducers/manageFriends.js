export function manageFriends(state, action){
  switch(action.type){
    case('ADD_FRIEND'):
    let newFriends = state.friends.slice()
    newFriends.push(action.friend)
    return {...state, friends: newFriends};

    case('REMOVE_FRIEND'):
    let foo = state.friends.slice()
    foo = foo.filter((friend) => friend.id !== action.id)
    
    return {...state, friends: foo};
  default:
    return state
  }
}
