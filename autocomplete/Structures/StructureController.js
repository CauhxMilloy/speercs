/**
 * Claim this structure to take control over the room.
 * The controller structure cannot be damaged or destroyed.
 * It can be addressed by Room.controller property.
 *
 * @class
 * @extends {OwnedStructure}
 */
var StructureController =
{
    /**
     * Current controller level, from 0 to 8.
     *
     * @type {number}
     */
    level: 0,

    /**
     * The current progress of upgrading the controller to the next level.
     *
     * @type {number}
     */
    progress: 0,

    /**
     * The progress needed to reach the next level.
     *
     * @type {number}
     */
    progressTotal: 0,

    /**
     * An object with the controller reservation info if present
     *
     * @type {null|{username: string, ticksToEnd: number}}
     */
    reservation: {},

    /**
     * The amount of game ticks when this controller will lose one level.
     * This timer can be reset by using Creep.upgradeController.
     *
     * @type {number}
     */
    ticksToDowngrade: 0,

    /**
     * The amount of game ticks while this controller cannot be upgraded due to attack.
     *
     * @type {number}
     */
    upgradeBlocked: 0,

    /**
     * Make your claimed controller neutral again.
     *
     * @type {function}
     *
     * @return {number|OK|ERR_NOT_OWNER}
     */
    unclaim: function() { },
    
    
    ////////////////////////////////
    /// Base Class Shits
    ////////

    /**
     * Whether this is your own structure.
     *
     * @type {boolean}
     */
    my: true,

    /**
     * An object with the structure’s owner info
     *
     * @type {{username: string}}
     */
    owner:
    {
        username: ""
    },
    
    
    ////////////////////////////////
    /// Base Class Shits
    ////////
    
    /**
     * The current amount of hit points of the structure.
     *
     * @type {number}
     */
    hits: 0,

    /**
     * The total amount of hit points of the structure.
     *
     * @type {number}
     */
    hitsMax: 0,

    /**
     * A unique object identificator.
     * You can use Game.getObjectById method to retrieve an object instance by its id.
     *
     * @type {string}
     */
    id: "",

    /**
     * One of the STRUCTURE_* constants.
     *
     * @type {string}
     */
    structureType: "",

    /**
     * Destroy this structure immediately.
     *
     * @type {function}
     *
     * @return {number|OK|ERR_NOT_OWNER}
     */
    destroy: function() { },

    /**
     * Check whether this structure can be used.
     * If the room controller level is not enough,
     * then this method will return false, and the structure will be highlighted with red in the game.
     *
     * @type {function}
     *
     * @return {boolean}
     */
    isActive: function() { },

    /**
     * Toggle auto notification when the structure is under attack.
     * The notification will be sent to your account email.
     * Turned on by default.
     *
     * @type {function}
     *
     * @param {boolean} enabled Whether to enable notification or disable.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_INVALID_ARGS}
     */
    notifyWhenAttacked: function(enabled) { },


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
