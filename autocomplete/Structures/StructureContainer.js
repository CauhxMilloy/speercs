/**
 * A small container that can be used to store resources.
 * This is a walkable structure.
 * All dropped resources automatically goes to the container at the same tile.
 *
 * @class
 * @extends {Structure}
 */
var StructureContainer =
{
    /**
     * An object with the structure contents.
     * Each object key is one of the RESOURCE_* constants, values are resources amounts.
     * Use _.sum(structure.store) to get the total amount of contents.
     *
     * @type {Array<string, number>}
     */
    store: {},

    /**
     * The total amount of resources the structure can contain.
     *
     * @type {number}
     */
    storeCapacity: 0,

    /**
     * Transfer resource from this structure to a creep.
     * The target has to be at adjacent square.
     *
     * @type {function}
     *
     * @param {Creep} target The target object.
     * @param {string} resourceType One of the RESOURCE_* constants.
     * @param {number} [amount] The amount of resources to be transferred. If omitted, all the available amount is used.
     *
     * @return {number|OK|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_TARGET|ERR_FULL|ERR_NOT_IN_RANGE|ERR_INVALID_ARGS}
     */
    transfer: function(target, resourceType, amount) { },
    
    
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
