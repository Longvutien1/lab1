import productList from "../data";

const adminDashBoard = {
    render() {
        return /* html */ `
      
      
          <div class="mt-8">
          <a href="/admin/news/add" class="bg-green-600 py-1 px-3 ">Add new</a>
          </div>
          <div class="flex flex-col mt-4">
                  <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                      <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                          <table class="min-w-full divide-y divide-gray-200">
                          <thead class="bg-gray-50">
                              <tr>
                              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  ID
                              </th>
                              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  IMAGE
                              </th>
                              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  title
                              </th>
                              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  Status
                              </th>
                              <th scope="col" class="relative px-6 py-3">
                                  <span class="sr-only">Edit</span>
                              </th>
                              </tr>
                          </thead>
                          
                        
                          ${productList.map((item) => `
                          <tbody class="bg-white divide-y divide-gray-200">
                          <tr>
                          <td class="px-6 py-4 whitespace-nowrap">
                              <div class="flex items-center">
                              <div class="flex-shrink-0 h-10 w-10">
                              <div class="text-sm text-gray-900">${item.id}</div>
                             
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap">
                               <div><img src="${item.img}" alt="" width="150"></div>
                          </td>
                         
                          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"> ${item.title} </td>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              Admin
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <a href="/admin/news/edit/${item.id}" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                          </td>
                          </tr>
          
                          <!-- More people... -->
                      </tbody>
                          `).join("")}
                          
                  </table>
                  </div>
                  </div>
              </div>
  

       
        `;
    },
};

export default adminDashBoard;