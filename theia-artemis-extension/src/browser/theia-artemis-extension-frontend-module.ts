/**
 * Generated using theia-extension-generator
 */
import { TheiaArtemisExtensionCommandContribution, TheiaArtemisExtensionMenuContribution } from './theia-artemis-extension-contribution';
import { CommandContribution, MenuContribution } from '@theia/core/lib/common';
import { ContainerModule } from '@theia/core/shared/inversify';

export default new ContainerModule(bind => {
    // add your contribution bindings here
    bind(CommandContribution).to(TheiaArtemisExtensionCommandContribution);
    bind(MenuContribution).to(TheiaArtemisExtensionMenuContribution);
});
