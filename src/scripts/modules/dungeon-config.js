export const dunegeonConfig = {
    max_iterations: 50,
    size: [100, 100],
    seed: makeid(5), //omit for generated seed
    rooms: {
        initial: {
            min_size: [3, 3],
            max_size: [3, 3],
            max_exits: 2,
            position: [0, 0] //OPTIONAL pos of initial room
        },
        any: {
            min_size: [2, 2],
            max_size: [5, 5],
            max_exits: 4
        }
    },
    max_corridor_length: 6,
    min_corridor_length: 2,
    corridor_density: 2, //corridors per room
    symmetric_rooms: false, // exits must be in the center of a wall if true
    interconnects: 2, //extra corridors to connect rooms and make circular paths. not 100% guaranteed
    max_interconnect_length: 10,
    room_count: 10
}

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() *
  charactersLength));
   }
   return result;
  }