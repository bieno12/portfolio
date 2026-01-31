import { Component, Input } from "@angular/core";

interface Skill {
  name: string;
  id: string;
  level: number;
}

@Component({
    selector: "skill-progress",
    template: `
<div class="container mt-4  ">
    @if (skill == undefined)
    {
    <h4 class="text-center"> Select a skill</h4>
    } @else {
    <h4 class="text-center">{{skill.name}}</h4>
    <div class="border text-white rounded">
        <div class="bg-success p-2 rounded" style="width: {{skill.level}}%;">
            {{skill.level}}%
        </div>
    </div>
    }
</div>
    
    `
})
export class SkillProgress {
    @Input() skill: Skill | undefined;

}