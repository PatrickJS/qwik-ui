import { component$, useStore } from '@builder.io/qwik';
import { Tab, TabList, TabPanel, Tabs } from '@qwik-ui/headless';

export default component$(() => {
  const tabsState = useStore(['Dynamic Tab 1', 'Dynamic Tab 2', 'Dynamic Tab 3']);
  return (
    <>
      <Tabs>
        <TabList>
          {tabsState.map((tab) => (
            <Tab key={tab}>{tab}</Tab>
          ))}
        </TabList>
        {tabsState.map((tab) => (
          <TabPanel key={tab}>{tab} Panel</TabPanel>
        ))}
      </Tabs>

      <button
        class="mt-4 font-bold text-red-600"
        onClick$={() => {
          if (tabsState.length > 1) {
            tabsState.splice(0, 1);
          }
        }}
      >
        Remove First Tab
      </button>
    </>
  );
});
