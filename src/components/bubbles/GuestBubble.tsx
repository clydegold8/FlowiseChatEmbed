import { For, Show, onMount } from 'solid-js';
import { Avatar } from '../avatars/Avatar';
import { Marked } from '@ts-stack/markdown';
import { MessageType } from '../Bot';

type Props = {
  message: MessageType;
  showAvatar?: boolean;
  avatarSrc?: string;
  backgroundColor?: string;
  textColor?: string;
};

const defaultBackgroundColor = '#3B81F6';
const defaultTextColor = '#ffffff';

Marked.setOptions({ isNoP: true });

export const GuestBubble = (props: Props) => {
  let userMessageEl: HTMLDivElement | undefined;

  onMount(() => {
    if (userMessageEl) {
      userMessageEl.innerHTML = Marked.parse(props.message.message);
    }
  });

  return (
    <div class="flex justify-end mb-2 items-end guest-container" style={{ 'margin-left': '50px' }}>
      <div
        class="max-w-full flex flex-col justify-center items-start chatbot-guest-bubble px-4 py-2 gap-2"
        data-testid="guest-bubble"
        style={{
          'background-color': props.backgroundColor ?? defaultBackgroundColor,
          color: props.textColor ?? defaultTextColor,
          'border-radius': '6px',
        }}
      >
        {props.message.fileUploads && props.message.fileUploads.length > 0 && (
          <div class="flex flex-wrap w-full gap-2">
            <For each={props.message.fileUploads}>
              {(item) => {
                return (
                  <>
                    {item.mime.startsWith('image/') ? (
                      <div class="flex items-center justify-center max-w-[128px] mr-[10px] p-0 m-0">
                        <img class="w-full h-full bg-cover" src={item.data as string} />
                      </div>
                    ) : (
                      <audio class="w-[200px] h-10 block bg-cover bg-center rounded-none text-transparent" controls>
                        Your browser does not support the &lt;audio&gt; tag.
                        <source src={item.data as string} type={item.mime} />
                      </audio>
                    )}
                  </>
                );
              }}
            </For>
          </div>
        )}
        {props.message.message && <span ref={userMessageEl} class="mr-2 whitespace-pre-wrap" />}
      </div>
      <Show when={props.showAvatar}>
        <Avatar initialAvatarSrc={props.avatarSrc} />
      </Show>
    </div>
  );
};
