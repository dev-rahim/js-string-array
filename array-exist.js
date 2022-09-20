const megaFriends = (friends) => {
    if (Array.isArray(friends) == false) {
        return ('please input a valid array');
    }
    else {
        let mega = [];
        for (const friend of friends) {
            if (friend.length > mega.length) {
                mega = (friend);
            }
        }
        return mega;
    }
}
const friends = ['rahomot', 'lubana', 'kadira'];

console.log(megaFriends(friends));