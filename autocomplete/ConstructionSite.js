/**
 * A site of a structure which is currently under construction.
 * A construction site can be created using the 'Construct' button at the left of the game field or the Room.createConstructionSite method.
 * To build a structure on the construction site, give a worker creep some amount of energy and perform Creep.build action.
 *
 * @class
 * @extends {RoomObject}
 */
var ConstructionSite =
{
    /**
     * A unique object identificator.
     * You can use Game.getObjectById method to retrieve an object instance by its id.
     *
     * @type {string}
     */
    id: "",

    /**
     * Whether this is your own construction site.
     *
     * @type {boolean}
     */
    my: true,

    /**
     * An object with the structure’s owner info
     *
     * @type {{username: ""}}
     */
    owner:
    {
        username: ""
    },

    /**
     * The current construction progress.
     *
     * @type {number}
     */
    progress: 0,

    /**
     * The total construction progress needed for the structure to be built.
     *
     * @type {number}
     */
    progressTotal: 0,

    /**
     * One of the STRUCTURE_* constants.
     *
     * @type {string}
     */
    structureType: "",

    /**
     * Remove the construction site.
     *
     * @type {function}
     *
     * @return {number|OK|ERR_NOT_OWNER}
     */
    remove: function() { },


    ////////////////////////////////
    /// Base Class Shits
    ////////

    
    /**
     * An object representing the position of this object in the room.
     *
     * @type {RoomPosition}
     */
    pos: RoomPosition,

    /**
     * The link to the Room object.
     * May be undefined in case if an object is a flag and is placed in a room that is not visible to you.
     *
     * @type {Room}
     */
    room: Room
};
