

var chiefOfLabor =
{
    JobTypes:
        {
            All,
            Babbies,
            Unemployeed,
            Harvester
        },

    jobGroups: {},

    ensureCreepsAreTracked:
        function()
        {
            var creepCount = Game.creeps.length;
            if (!this.jobGroups[JobTypes.All] || (this.jobGroups[JobTypes.All].length != creepCount))
            {
                var babbyCreeps = _.filter(Game.creeps, (creep) => creep.memory.babby );
                console.log('babbies: ' + babbyCreeps);
                this.jobGroups = {};
                this._recalculateJobGroups();
            }
        },

    _recalculateJobGroups:
        function()
        {
            var allCreeps = Game.creeps;
            this.jobGroups[JobTypes.All] = allCreeps;

        }
};


module.exports = chiefOfLabor;
