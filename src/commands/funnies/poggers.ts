import { CommandDefinition } from '../../lib/command';
import { CommandCategory } from '../../constants';

const POGGERS_URL = 'https://tenor.com/view/lizard-dancing-poggers-lizard-dance-poggers-gif-18527737';

export const poggers: CommandDefinition = {
    name: 'poggers',
    description: 'POG',
    category: CommandCategory.FUNNIES,
    executor: (msg) => msg.channel.send( POGGERS_URL ),
};