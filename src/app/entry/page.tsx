'use client';

export default function EntryForm({ user }: any) {

    const addEntry = async (e: React.FormEvent<HTMLFormElement>) => {
      
      e.preventDefault();
      
      const formData = new FormData(e.currentTarget);
  
      const body = {
        title: formData.get('title'),
        content: formData.get('content'),
      };
  
      const res = await fetch('/api/entry', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      await res.json();
    };
  
    return (
      <div className="mx-2 my-2 justify-between">
        <h1>Add new entry</h1>
        <form onSubmit={addEntry}>
          <label htmlFor="title">Title</label>
          <input className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" name="title" defaultValue={user?.name ?? ''} />
          <label htmlFor="content">Content</label>
          <textarea
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="content"
            cols={30}
            rows={10}
            defaultValue={''}
          ></textarea>
  
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" type="submit">Post</button>
        </form>
      </div>
    );
  }