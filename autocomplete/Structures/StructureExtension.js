/**
 * Contains energy which can be spent on spawning bigger creeps.
 * Extensions can be placed anywhere in the room, any spawns will be able to use them regardless of distance.
 *
 * @class
 * @extends {OwnedStructure}
 */
var StructureExtension =
{
    /**
     * The amount of energy containing in the extension.
     *
     * @type {number}
     */
    energy: 0,

    /**
     * The total amount of energy the extension can contain.
     *
     * @type {number}
     */
    energyCapacity: 0,

    /**
     * Transfer the energy from the extension to a creep.
     * You can transfer resources to your creeps from hostile structures as well.
     *
     * @type {function}
     *
     * @param {Creep} target The creep object which energy should be transferred to.
     * @param {number} [amount] The amount of energy to be transferred. If omitted, all the remaining amount of energy will be used.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_TARGET|ERR_FULL|ERR_NOT_IN_RANGE}
     */
    transferEnergy: function(target, amount) { },
    
    
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
