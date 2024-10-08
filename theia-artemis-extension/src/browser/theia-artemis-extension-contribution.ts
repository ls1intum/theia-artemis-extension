import { injectable, inject } from '@theia/core/shared/inversify';
import { Command, CommandContribution, CommandRegistry, MenuContribution, MenuModelRegistry, MessageService } from '@theia/core/lib/common';
import { CommonMenus } from '@theia/core/lib/browser';

export const TheiaArtemisExtensionCommand: Command = {
    id: 'TheiaArtemisExtension.command',
    label: 'Say Hello'
};

@injectable()
export class TheiaArtemisExtensionCommandContribution implements CommandContribution {

    constructor(
        @inject(MessageService) private readonly messageService: MessageService,
    ) { }

    registerCommands(registry: CommandRegistry): void {
        registry.registerCommand(TheiaArtemisExtensionCommand, {
            execute: () => this.messageService.info('Hello World!')
        });
    }
}

@injectable()
export class TheiaArtemisExtensionMenuContribution implements MenuContribution {

    registerMenus(menus: MenuModelRegistry): void {
        menus.registerMenuAction(CommonMenus.EDIT_FIND, {
            commandId: TheiaArtemisExtensionCommand.id,
            label: TheiaArtemisExtensionCommand.label
        });
    }
}
