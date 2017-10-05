class Spaceship {
  constructor(name, crewMembers, phasers, shields) {
    this.name = name;
    this.crewMembers = crewMembers;
    this.phasers = phasers;
    this.shields = shields;
    this.warpDrive = "disengaged";
    this.cloaked = false;
    this.phasersCharge = "uncharged";
    this.docked = this.crewMembers.length < 1 ? true : false;
  }
}
