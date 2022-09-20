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

if (friends.indexOf('lubana1') !== -1) {
    console.log('exits');
}
else {
    console.log('not exits');
}

if (friends.includes('lubana')) {
    console.log('exits');
}
else {
    console.log('not exits');
}

const first = [15, 58, 632, 52, 52]
const second = [53, 586, 85, 96, 232]

const combined = first.concat(second);
console.log(combined);

