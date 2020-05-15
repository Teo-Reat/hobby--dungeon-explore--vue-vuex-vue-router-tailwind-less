<template>
  <div>
    <router-link to="/">Home</router-link>
    <dialog-scene v-if="!fight" :situation="situation" :persons="persons" />
    <fight-scene v-else :persons="persons" />
    <button @click="fight = true" class="bg-red-700 text-white px-4 py-2 rounded" v-show="!fight">Prepare to fight!</button>
  </div>
</template>

<script>
import FightScene from '../components/FightScene'
import DialogScene from '../components/DialogScene'

export default {
  components: {
    FightScene,
    DialogScene
  },
  data () {
    return {
      fight: false,
      persons: [
        {
          name: 'Instructor',
          gender: 'Male',
          background: 'Mystic',
          class: 'Sage',
          stats: {
            strength: 0,
            dexterity: 0,
            intelligence: 0
          },
          state: {
            HP: 0,
            damage: 0,
            evasion: 0,
            critical: 0
          }
        }
      ],
      situation: {
        location: 'Outside',
        description: 'Modification at the center was the flight of assimilation, transformed to a most unusual pathway.' +
          'The dubloon laughs beauty like a rough mast. Everyone just loves the aroma of bok choy fritters whiskd with parsley.',
        dialogs: [
          {
            id: 0,
            description: 'Jacks whine with fight at the shiny east india!',
            options: {
              common: [
                { goTo: 1, option: 'Yarr, small horror!' },
                { goTo: 2, option: 'Aw, aww.' },
                { goTo: 3, option: 'Gulls stutter with death!' }
              ],
              noble: [
                { goTo: 4, option: 'Whiskey soup is just not the same without mustard and clammy shredded lettuces.' }
              ],
              sage: [
                { goTo: 5, option: 'The emitter is more sonic shower now than astronaut. quirky and bravely ordinary.' }
              ]
            }
          },
          {
            id: 1,
            description: 'Diced, divided pudding is best covered with ground gold tequila!',
            options: {
              common: [
                { goTo: 0, option: 'Punishment, beauty, and grace!' },
                { goTo: 0, option: 'Never lead a breeze.' },
                { goTo: 0, option: 'Riddle, power, and desolation!' }
              ],
              noble: [
                { goTo: 0, option: 'Eggs can be seasoned with minced chickpeas, also try tossing the soup with beer.' }
              ],
              sage: [
                { goTo: 0, option: 'The admiral is more particle now than phenomenan. colorful and proudly ancient.' }
              ]
            }
          },
          {
            id: 2,
            description: 'Dark, golden shipmates unlawfully rob a weird, real dagger!',
            options: {
              common: [
                { goTo: 1, option: 'Ho-ho-ho! horror of faith!' },
                { goTo: 1, option: 'Cannons hobble with yellow fever!' },
                { goTo: 1, option: 'Ho-ho-ho! yellow fever of riddle!' }
              ],
              noble: [
                { goTo: 1, option: 'Zucchini can be blended with yellow chicory, also try varnishing the punch with olive oil.' }
              ],
              sage: [
                { goTo: 1, option: 'Sonic shower at the radiation dome was the definition of ellipse, translated to a fantastic transformator.' }
              ]
            }
          },
          {
            id: 3,
            description: 'Dark, jolly masts quirky drink a clear, cold reef!',
            options: {
              common: [
                { goTo: 1, option: 'Ho-ho-ho! beauty of power!' },
                { goTo: 1, option: 'Ho-ho-ho! death of treasure.' },
                { goTo: 1, option: 'Landlubbers sing with booty!' }
              ],
              noble: [
                { goTo: 1, option: 'Oysters can be mashed up with al dente blood oranges, also try enameling the fritters with rum.' }
              ],
              sage: [
                { goTo: 1, option: 'The processor is more space now than cosmonaut. spheroid and finally unrelated.' }
              ]
            }
          },
          {
            id: 4,
            description: 'Salty, jolly plunders loudly command a stormy, scurvy ale',
            options: {
              common: [
                { goTo: 1, option: 'Swabbies whine with desolation!' },
                { goTo: 1, option: 'Never pull a lad.' },
                { goTo: 1, option: 'Ho-ho-ho! greed of adventure!' }
              ],
              noble: [
                { goTo: 1, option: 'Eggs can be varnished with smashed watermelon, also try enameling the kebab with peppermint tea.' }
              ],
              sage: [
                { goTo: 1, option: 'The parrot sails with life, fight the lighthouse before it whines.' }
              ]
            }
          },
          {
            id: 5,
            description: 'Fine, lively seashells oppressively love a rainy, clear sun!',
            options: {
              common: [
                { goTo: 1, option: 'Ho-ho-ho! riddle of yellow fever!' },
                { goTo: 1, option: 'Malaria, greed, and grace.' },
                { goTo: 1, option: 'Rums rise with punishment!' }
              ],
              noble: [
                { goTo: 1, option: 'Ghee can be garnished with mild quinoa, also try rubbing the cheesecake with adobo sauce.' }
              ],
              sage: [
                { goTo: 1, option: 'Starlight travel at the colony was the love of honor, promised to a small crew.' }
              ]
            }
          },
          {
            id: 6,
            description: 'Big, dark shores swiftly break a misty, old wind!',
            options: {
              common: [
                { goTo: 1, option: 'Desolation, passion, and pestilence!' },
                { goTo: 1, option: 'Ho-ho-ho! hunger of booty.' },
                { goTo: 1, option: 'Never rob a son!' }
              ],
              noble: [
                { goTo: 1, option: 'Caviar can be blended with springy chicken breasts, also try enameling the stir-fry with plain vinegar.' }
              ],
              sage: [
                { goTo: 1, option: 'The space is more dosi now than astronaut. final and pedantically brave.' }
              ]
            }
          },
          {
            id: 7,
            description: 'Salty, clear corsairs smartly blow a stormy, real wench!',
            options: {
              common: [
                { goTo: 1, option: 'Plunders fall with faith!' },
                { goTo: 1, option: 'Cannibals fall with halitosis.' },
                { goTo: 1, option: 'Amnesty, life, and strength!' }
              ],
              noble: [
                { goTo: 1, option: 'Carrots can be whisked with nutty quinoa, also try tossing the fritters with white wine.' }
              ],
              sage: [
                { goTo: 1, option: 'The admiral is more green people now than queen. huge and accelerative devastated.' }
              ]
            }
          }
        ]
      }
    }
  }
}
</script>
