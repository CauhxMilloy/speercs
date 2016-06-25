/**
 * Memory - Used to store arbitrary memory entries in arbitrary keys.
 * @type {Object<string, any>}
 */
var Memory =
{
    /**
     * @type {object<string, Creep>}
     */
    creeps: {},

    /**
     * @type {object<string, Spawn>}
     */
    spawns: {},

    /**
     * @type {object<string, Room>}
     */
    rooms: {},

    /**
     * @type {object<string, Flag>}
     */
    flags: {}
};
