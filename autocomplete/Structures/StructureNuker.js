/**
 * Launches a nuke to another room dealing huge damage to the landing area.
 * Each launch has a cooldown and requires energy and ghodium resources.
 * Launching creates a Nuke object at the target room position which is visible to any player until it is landed.
 * Incoming nuke cannot be moved or cancelled. Nukes cannot be launched from or to novice rooms.
 *
 * @class
 * @extends {OwnedStructure}
 */
var StructureNuker =
{
    /**
     * The amount of energy containing in this structure.
     *
     * @type {number}
     */
    energy: 0,

    /**
     * The total amount of energy this structure can contain.
     *
     * @type {number}
     */
    energyCapacity: 0,

    /**
     * The amount of ghodium containing in this structure.
     *
     * @type {number}
     */
    ghodium: 0,

    /**
     * The total amount of ghodium this structure can contain.
     *
     * @type {number}
     */
    ghodiumCapacity: 0,

    /**
     * The amount of game ticks until the next launch is possible.
     *
     * @type {number}
     */
    cooldown: 0,

    /**
     * Launch a nuke to the specified position.
     *
     * @type {function}
     *
     * @param {RoomPosition} pos The target room position.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_TARGET|ERR_NOT_IN_RANGE|ERR_TIRED|ERR_RCL_NOT_ENOUGH}
     */
    launchNuke: function(pos) { },
    
    
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
