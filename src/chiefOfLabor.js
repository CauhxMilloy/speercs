

var chiefOfLabor =
{
    init:
        function()
        {
            if (!Memory.chiefOfLabor)
            {
                console.log('Chief of Labor: Initializing!');
                Memory.chiefOfLabor = {};
                Memory.chiefOfLabor._jobGroups = {};
                
                for (var jobType in this._JobTypes)
                {
                    Memory.chiefOfLabor._jobGroups[jobType] = {};
                }
            }
        },
    
    ensureCreepsAreTracked:
        function()
        {
            var creepCount = Object.keys(Game.creeps).length;
            var trackedCreeps = Object.keys(Memory.chiefOfLabor._jobGroups[this._JobTypes.All]).length;
            if (trackedCreeps != creepCount)
            {
                console.log('Chief of Labor: Creeps have changed. Recalculating!');
                this._recalculateJobGroups();
            }
        },

    _recalculateJobGroups:
        function()
        {
            var self = this;
            var babbyCreeps = [];
            for (var creepName in Game.creeps)
            {
                var creep = Game.creeps[creepName];
                if (Memory.chiefOfLabor._jobGroups[self._JobTypes.All][creep.id] == undefined)
                {
                    babbyCreeps.push(creep);
                }
            }

            var deadCreepIds = [];
            for (var creepId in Memory.chiefOfLabor._jobGroups[this._JobTypes.All])
            {
                if (!Game.getObjectById(creepId))
                {
                    deadCreepIds.push(creepId);
                }
            }

            babbyCreeps.forEach(
                function(babbyCreep)
                {
                    Memory.chiefOfLabor._jobGroups[self._JobTypes.All][babbyCreep.id] = 1;
                    Memory.chiefOfLabor._jobGroups[self._JobTypes.Unemployed][babbyCreep.id] = 1;
                });
            this._killOffDeadCreeps(deadCreepIds);
        },

    _killOffDeadCreeps:
        function(deadCreepIds)
        {
            var self = this;
            deadCreepIds.forEach(
                function(creepId)
                {
                    for (var jobType in self._JobTypes)
                    {
                        delete Memory.chiefOfLabor._jobGroups[jobType][creepId];
                    };
                });
        },
        
    _JobTypes:
        {
            All: 'All',
            Unemployed: 'Unemployed',
            Harvester: 'Harvester'
        },
};


module.exports = chiefOfLabor;
