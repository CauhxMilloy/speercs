/**
 * An energy source object.
 * Can be harvested by creeps with a WORK body part.
 *
 * @class
 * @extends {RoomObject}
 */
var Source =
{
    /**
     * The remaining amount of energy.
     *
     * @type {number}
     */
    energy: 0,

    /**
     * The total amount of energy in the source.
     *
     * @type {number}
     */
    energyCapacity: 0,

    /**
     * A unique object identificator.
     * You can use Game.getObjectById method to retrieve an object instance by its id.
     *
     * @type {string}
     */
    id: "",

    /**
     * The remaining time after which the source will be refilled.
     *
     * @type {number}
     */
    ticksToRegeneration: 0,


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
