import { CommandDefinition } from '../../lib/command';
import { CommandCategory } from '../../constants';
import { makeEmbed } from '../../lib/embed';

export const versions: CommandDefinition = {
    name: 'versions',
    description: 'Explains the different A32NX versions',
    category: CommandCategory.A32NX,
    executor: (msg) => msg.channel.send(makeEmbed({
        title: 'FlyByWire A32NX | Versions',
        footer: { text: 'If you are having further problems, let us know in our #support channel.' },
        fields: [
            {
                name: 'Stable, Development or Experimental?',
                value: '> You can find a brief explanation of the versions below, for a more in depth comparison, [please click here.](https://docs.flybywiresim.com/fbw-a32nx/fbw-versions) ',
                inline: false,
            },
            {
                name: 'Stable',
                value: '> Stable is our version which has features that are the most mature and most tested. '
                        + 'This should be a reliable version for those preferring stability over newest features. '
                        + 'Will be compatible with each major MSFS patch.'
                        + '\n> Use the installer or [download here](https://api.flybywiresim.com/api/v1/download?url=https://flybywiresim-packages.b-cdn.net/stable/A32NX-stable.zip)',
                inline: false,
            },
            {
                name: 'Development',
                value: '> Development will have the latest features that will eventually end up in the next stable release. '
                        + 'In general this version has the latest fixes and newest features but also a slightly higher risk of containing bugs. '
                        + 'Development updates whenever a change is made to the "master" branch on Github. '
                        + '\n> Use the installer or [download here](https://api.flybywiresim.com/api/v1/download?url=https://flybywiresim-packages.b-cdn.net/vmaster/A32NX-master.zip)',
                inline: false,
            },
            {
                name: 'Experimental',
                value: '> This version is similar to the development version, but contains custom systems still being developed, including the new FBW Custom Flight Management System (cFMS). '
                        + 'Experimental will be updated with the latest changes from both the "autopilot-custom-fpm" branch and development version regularly. '
                        + '\n> No support will be offered via Discord for this version. '
                        + '\n> Use the installer or [download here](https://api.flybywiresim.com/api/v1/download?url=https://flybywiresim-packages.b-cdn.net/experimental/A32NX-experimental.zip)',
                inline: false,
            },
        ],
    })),
};
